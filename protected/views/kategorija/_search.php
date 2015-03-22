<?php
/* @var $this KategorijaController */
/* @var $model Kategorija */
/* @var $form CActiveForm */
?>

<div class="wide form">

<?php $form=$this->beginWidget('CActiveForm', array(
	'action'=>Yii::app()->createUrl($this->route),
	'method'=>'get',
)); ?>

	<div class="row">
		<?php echo $form->label($model,'idKategorija'); ?>
		<?php echo $form->textField($model,'idKategorija'); ?>
	</div>

	<div class="row">
		<?php echo $form->label($model,'naziv'); ?>
		<?php echo $form->textField($model,'naziv',array('size'=>45,'maxlength'=>45)); ?>
	</div>

	<div class="row buttons">
		<?php echo CHtml::submitButton('Search'); ?>
	</div>

<?php $this->endWidget(); ?>

</div><!-- search-form -->