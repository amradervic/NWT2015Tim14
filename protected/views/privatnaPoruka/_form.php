<?php
/* @var $this PrivatnaPorukaController */
/* @var $model PrivatnaPoruka */
/* @var $form CActiveForm */
?>

<div class="form">

<?php $form=$this->beginWidget('CActiveForm', array(
	'id'=>'privatna-poruka-form',
	// Please note: When you enable ajax validation, make sure the corresponding
	// controller action is handling ajax validation correctly.
	// There is a call to performAjaxValidation() commented in generated controller code.
	// See class documentation of CActiveForm for details on this.
	'enableAjaxValidation'=>false,
)); ?>

	<p class="note">Fields with <span class="required">*</span> are required.</p>

	<?php echo $form->errorSummary($model); ?>

	<div class="row">
		<?php echo $form->labelEx($model,'idPrivatnaPoruka'); ?>
		<?php echo $form->textField($model,'idPrivatnaPoruka'); ?>
		<?php echo $form->error($model,'idPrivatnaPoruka'); ?>
	</div>

	<div class="row">
		<?php echo $form->labelEx($model,'vrijemeSlanja'); ?>
		<?php echo $form->textField($model,'vrijemeSlanja'); ?>
		<?php echo $form->error($model,'vrijemeSlanja'); ?>
	</div>

	<div class="row">
		<?php echo $form->labelEx($model,'naslov'); ?>
		<?php echo $form->textField($model,'naslov',array('size'=>45,'maxlength'=>45)); ?>
		<?php echo $form->error($model,'naslov'); ?>
	</div>

	<div class="row">
		<?php echo $form->labelEx($model,'poruka'); ?>
		<?php echo $form->textArea($model,'poruka',array('rows'=>6, 'cols'=>50)); ?>
		<?php echo $form->error($model,'poruka'); ?>
	</div>

	<div class="row">
		<?php echo $form->labelEx($model,'Korisnici_idKorisnik'); ?>
		<?php echo $form->textField($model,'Korisnici_idKorisnik',array('size'=>60,'maxlength'=>128)); ?>
		<?php echo $form->error($model,'Korisnici_idKorisnik'); ?>
	</div>

	<div class="row">
		<?php echo $form->labelEx($model,'Korisnici_idKorisnik1'); ?>
		<?php echo $form->textField($model,'Korisnici_idKorisnik1',array('size'=>60,'maxlength'=>128)); ?>
		<?php echo $form->error($model,'Korisnici_idKorisnik1'); ?>
	</div>

	<div class="row buttons">
		<?php echo CHtml::submitButton($model->isNewRecord ? 'Create' : 'Save'); ?>
	</div>

<?php $this->endWidget(); ?>

</div><!-- form -->