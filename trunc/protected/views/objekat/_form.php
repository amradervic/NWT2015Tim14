<?php
/* @var $this ObjekatController */
/* @var $model Objekat */
/* @var $form CActiveForm */
?>

<div class="form">

<?php $form=$this->beginWidget('CActiveForm', array(
	'id'=>'objekat-form',
	// Please note: When you enable ajax validation, make sure the corresponding
	// controller action is handling ajax validation correctly.
	// There is a call to performAjaxValidation() commented in generated controller code.
	// See class documentation of CActiveForm for details on this.
	'enableAjaxValidation'=>false,
)); ?>

	<p class="note">Fields with <span class="required">*</span> are required.</p>

	<?php echo $form->errorSummary($model); ?>

	<div class="row">
		<?php echo $form->labelEx($model,'naziv'); ?>
		<?php echo $form->textField($model,'naziv',array('size'=>45,'maxlength'=>45)); ?>
		<?php echo $form->error($model,'naziv'); ?>
	</div>

	<div class="row">
		<?php echo $form->labelEx($model,'adresa'); ?>
		<?php echo $form->textField($model,'adresa',array('size'=>45,'maxlength'=>45)); ?>
		<?php echo $form->error($model,'adresa'); ?>
	</div>

	<div class="row">
		<?php echo $form->labelEx($model,'grad'); ?>
		<?php echo $form->textField($model,'grad',array('size'=>45,'maxlength'=>45)); ?>
		<?php echo $form->error($model,'grad'); ?>
	</div>

	<div class="row">
		<?php echo $form->labelEx($model,'tip'); ?>
		<?php echo $form->textField($model,'tip',array('size'=>45,'maxlength'=>45)); ?>
		<?php echo $form->error($model,'tip'); ?>
	</div>

	<div class="row">
		<?php echo $form->labelEx($model,'opis'); ?>
		<?php echo $form->textArea($model,'opis',array('rows'=>6, 'cols'=>50)); ?>
		<?php echo $form->error($model,'opis'); ?>
	</div>

	<div class="row buttons">
		<?php echo CHtml::submitButton($model->isNewRecord ? 'Create' : 'Save'); ?>
	</div>

<?php $this->endWidget(); ?>

</div><!-- form -->